import { Button } from '@wordpress/components';

export function DeletePageButton({ pageId }) {
	const { deleteEntityRecord } = useDispatch( coreDataStore );
	const handleDelete = () => deleteEntityRecord( 'postType', 'page', pageId );
	return (
		<Button variant="primary" onClick={ handleDelete }>
			Delete
		</Button>
	);
}
