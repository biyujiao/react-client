import React from "react";
import './index.less';
import logo from '@/assets/imgs/logo.png';
import {BarsOutlined} from '@ant-design/icons';
import classnames from 'classnames';


interface Props {
    //表示当前选中的分类，这个值将会被存放在redux中
    currentCategory: string;
    setCurrentCategory: (currentCategory: string) => void;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function HomeHeader(props:Props) {
    const [isMenuVisible, setMenuVisible] = React.useState(false);
    const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        const target:HTMLUListElement = event.target as HTMLUListElement;// 获取事件源对象
        const category = target.dataset.category;//获取事件源对象对应的自定义属性的值 all react vue
        props.setCurrentCategory(category);
        // 点击菜单某一项隐藏菜单
        setMenuVisible(false);
    }
    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo} />
                <BarsOutlined onClick={() => setMenuVisible(true)}/>
            </div>
            {
                isMenuVisible && <ul
                    className="category"
                    onClick={setCurrentCategory}
                >
                    <li data-category="all" className={
                        classnames({
                            active: props.currentCategory === 'all'
                        })
                    }>全部</li>
                    <li data-category="react" className={
                        classnames({
                            active: props.currentCategory === 'react'
                        })
                    }>React</li>
                    <li data-category="vue" className={
                        classnames({
                            active: props.currentCategory === 'vue'
                        })
                    }>Vue</li>
                </ul>
            }
            
        </header>
    );
}
export default HomeHeader;