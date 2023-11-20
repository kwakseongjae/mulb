import React from "react";
import "@/app/globals.css";

interface TagsProps extends TagProps{
	children:Array<string>;
	width:string;
	maxColum:number;
}
export default function Tags({children,width,colorScheme,theme,maxColum}:TagsProps){
	const maxHeight:string = (maxColum * (1.1 + 1 + 1)).toString() + "rem";
	const tagsStyle:object = {
		display:"inline-block",
		height:maxHeight,
		overflow:"hidden"
	}

	const tags:Array<React.ReactNode> = [];
	children.forEach((tag:string,index:number):void=>{
		tags.push(<Tag tagName={tag} colorScheme={colorScheme} theme={theme} key={index}/>);
	});
	return(<div className={width} style={tagsStyle}>{tags}</div>);
}

interface TagProps {
	tagName?:string;
	colorScheme?:string;
	theme?:string;
}
const tagStyle:object = {
	display:"inline-block",
	marginRight: "1rem",
	padding: "0.6rem 1rem 0.5rem 1rem",
	marginBottom: "1rem",
	fontSize: "1rem",
	height:"fit-content"
}
function Tag({colorScheme,theme,tagName}:TagProps){
	return(
	<div className={[colorScheme,theme].join(" ").trim()} style={tagStyle}>
		{tagName}
	</div>
	);
}