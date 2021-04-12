import React, {PropsWithChildren} from 'react';
import { connect } from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {RootState, CarState} from '@/store/reducers';
type StateProps = ReturnType<typeof mapStateToProps>;

type Prop = PropsWithChildren<RouteComponentProps> & StateProps;
function Car(props: Prop) {
    return <div>{props.title}</div>
}
function mapStateToProps(state: RootState):CarState {
    return state.car;
}
//connect: 连接组件和仓库
export default connect(
    mapStateToProps
)(Car);