import React from 'react';
import { Title, Form, Repositories } from './styles';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt='Github Explorer' />
			<Title>Explore repositórios no github</Title>

			<Form action=''>
				<input placeholder='Digite o nome do repositório' />
				<button type='submit'>Pesquisar</button>
			</Form>

			<Repositories>
				<a href='teste'>
					<img
						src='https://avatars2.githubusercontent.com/u/16818069?s=460&u=2c1f8c01eeb830659fba25f639effed6d0796598&v=4'
						alt='Elioenay Silva'
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Easy peasy highly scalable ReactJS & React Native forms! </p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href='teste'>
					<img
						src='https://avatars2.githubusercontent.com/u/16818069?s=460&u=2c1f8c01eeb830659fba25f639effed6d0796598&v=4'
						alt='Elioenay Silva'
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Easy peasy highly scalable ReactJS & React Native forms! </p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
