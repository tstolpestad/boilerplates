import React, {useState} from "react";
import {Droppable} from "react-beautiful-dnd"
//css imports
import classNames from './PageList.css';
//own components
import {PageElement} from './PageElement';

export const PageList = ({id, pages, title, dnd, style, search})=> {

	const [open, setOpen] = useState(true);

	//very simple search filter, might have to be refined or even maybe this should be moved to the backend
	const isInSearch= element => !search || element.title.includes(search)

	const pageElements = open && pages.map((page, index) => isInSearch(page) && <PageElement key={index} element={page} index={index} dnd={dnd}/>);
	const pagesContainer = dnd ?
			<Droppable droppableId={id}>
				{provided=> (
					<div ref={provided.innerRef}
						 {...provided.droppableProps}>
						{pageElements}
						{provided.placeholder}
					</div>)
				}
			</Droppable>
			: pageElements
		;
	const titleClasses = style?classNames.title + " "+classNames[style] : classNames.title;
	return <div className={classNames.list}>
		{title && <div className={titleClasses} onClick={()=> setOpen(!open)}>{title}<i className={"material-icons "+classNames.rightIcon}>
			{open? "arrow_drop_up" : "arrow_drop_down"}
		</i></div>}
		<div className={title && classNames.indented}>
			{pagesContainer}
		</div>

	</div>
}
