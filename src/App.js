import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ViewOne from './Components/ViewOne';
import ViewTwo from './Components/ViewTwo';

const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

const Container = styled('div')`
  display: flex;
  height:100vh;
`;

const App = () => {
	const [ results, setResults ] = useState(null);
	const [ selectedPokemon, setSelectedPokemon ] = useState(0);

	useEffect(() => {
		axios
			.get(baseURL)
			.then((response) => {
				// handle success
				setResults(response.data);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}, []);

	return (
		<Container>
			<ViewOne 
			results={results?.results}
			selectedPokemon={selectedPokemon}
			setSelectedPokemon={setSelectedPokemon}
			 />
			<ViewTwo 
			selectedPokemon={selectedPokemon}
			allPokemon={results?.results}
			/>
		</Container>
	);
};

export default App;