import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>H1</h4>
                ываываывааыв
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    img="https://arvi.ch/skin/frontend/arvi/default/images/logo.gif"
                    author="Sam"
                    time="6PM"
                    text="6sdfsdfsdfs fsdf sdf"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    img="https://arvi.ch/media/catalog/category/bordeaux_ep_2016.svg"
                    author="Alex"
                    time="5PM"
                    text="dddd ffff fsdf sdf"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    img="https://arvi.ch/media/catalog/category/bordeaux_ep_2017_2.svg"
                     author="Jane"
                    time="8PM"
                    text="dd ww  fsdf sdf"
                />
            </ApprovalCard>

        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));