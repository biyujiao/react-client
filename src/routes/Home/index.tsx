import React, {PropsWithChildren} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import { RootState, HomeState } from '@/store/reducers';

type Prop = PropsWithChildren<RouteComponentProps> & HomeState;
function Home(props: Prop) {
    return <div>{props.title}</div>
}
function mapStateToProps(state: RootState):HomeState {
    return state.home;
}
//connect: 连接组件和仓库
export default connect(
    mapStateToProps
)(Home);