import React from "react";

interface Props {
    //表示当前选中的分类，这个值将会被存放在redux中
    currentCategory: string;
    setCurrentCategory: (currentCategory: string) => void;
}
function HomeHeader(props:Prop) {
    return (
        <header className="home-header"></header>
    )
}