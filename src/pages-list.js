import { Spinner } from "@wordpress/components";
import { decodeEntities } from "@wordpress/html-entities";

import { PageEditButton } from './page-edit-button';

export function PagesList( { hasResolved, pages } ) {
	if ( ! hasResolved ) {
		return <Spinner />;
	}
	if ( ! pages?.length ) {
		return <div>No results</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
			<tr>
				<td>Title</td>
				<td style={ { width: 120 } }>Actions</td>
			</tr>
			</thead>
			<tbody>
			{ pages?.map( ( page ) => (
				<tr key={ page.id }>
					<td>{ decodeEntities( page.title.rendered ) }</td>
					<td>
						<PageEditButton pageId={ page.id }/>
					</td>
				</tr>
			) ) }
			</tbody>
		</table>
	);
}
