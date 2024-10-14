import { SearchControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";

import { PagesList } from './pages-list';
import { CreatePageButton } from './create-page-button';

export function MyFirstApp() {
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const { pages, hasResolved } = useSelect(
		( select ) => {
			const query = {};
			if ( searchTerm ) {
				query.search = searchTerm;
			}
			const selectorArgs = [ 'postType', 'page', query ];
			return {
				pages: select( coreDataStore ).getEntityRecords(
					...selectorArgs
				),
				hasResolved: select( coreDataStore ).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs
				),
			};
		},
		[ searchTerm ]
	);

	return (
		<div>
			<div className="list-controls">
				<SearchControl onChange={ setSearchTerm } value={ searchTerm }/>
				<CreatePageButton/>
			</div>
			<PagesList hasResolved={ hasResolved } pages={ pages }/>
		</div>
	);
}
