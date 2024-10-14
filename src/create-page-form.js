import { store as coreDataStore } from "@wordpress/core-data";
import { useDispatch, useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";

import { PageForm } from "./page-form";

export function CreatePageForm( { onCancel, onSaveFinished } ) {
	const [title, setTitle] = useState();
	const { lastError, isSaving } = useSelect(
		( select ) => ( {
			lastError: select( coreDataStore )
				.getLastEntitySaveError( 'postType', 'page' ),
			isSaving: select( coreDataStore )
				.isSavingEntityRecord( 'postType', 'page' ),
		} ),
		[]
	);

	const { saveEntityRecord } = useDispatch( coreDataStore );
	const handleSave = async () => {
		const savedRecord = await saveEntityRecord(
			'postType',
			'page',
			{ title, status: 'publish' }
		);
		if ( savedRecord ) {
			onSaveFinished();
		}
	};

	return (
		<PageForm
			title={ title }
			onChangeTitle={ setTitle }
			hasEdits={ !!title }
			onSave={ handleSave }
			lastError={ lastError }
			onCancel={ onCancel }
			isSaving={ isSaving }
		/>
	);
}
