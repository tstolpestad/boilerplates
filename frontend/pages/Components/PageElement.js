import React from "react";
import {Draggable} from "react-beautiful-dnd"
import classNames from './PageElement.css';


export const PageElement = ({element, index, dnd, }) => {
	//todo: styling
	return dnd ?
		<Draggable draggableId={element.id} index={index}>
			{
				provided => (
					<div className={classNames.element } {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
						<span className={classNames.icon}>/</span>
						{element.title}
					</div>
				)

			}
		</Draggable>
		:<div className={classNames.element }>
		<span className={classNames.icon}>/</span>
		{element.title}
	</div>
}
