import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

interface Repository {
	full_name: string;
	description: string;
	stargazers_count: number;
	forkers_cont: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

interface RepositoryParams {
	repository: string;
}

interface Issue {
	title: string;
	id: string;
	html_url: string;
	user: {
		login: string;
	};
}

const Repository: React.FC = () => {
	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);

	const { params } = useRouteMatch<RepositoryParams>();

	useEffect(() => {
		api.get(`repos/${params.repository}`).then(response => {
			setRepository(response.data);
		});
		api.get(`repos/${params.repository}/issues`).then(response => {
			setIssues(response.data);
		});
	}, [params.repository]);

	return (
		<>
			<Header>
				<img src={logoImg} alt='Github Explorer' />
				<Link to='/'>
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			{repository && (
				<RepositoryInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}p</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repository.forkers_cont}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Issues abertas</span>
						</li>
					</ul>
				</RepositoryInfo>
			)}

			<Issues>
				{issues.map(issue => (
					<a key={issue.id} href={issue.html_url}>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Issues>
		</>
	);
};

export default Repository;
