import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';
import './index.css'
import HotView from './HotView/index';
import TopView from './TopView/index';

class Page extends react.Component {
    constructor() {
        super()
        this.state = {
            topView: true,
            hotView: false,
        }
    }

    TopView = () => {
        this.setState({
            topView: true,
            hotView: false
        });
    }

    HotView = () => {
        this.setState({
            hotView: true,
            topView: false,
        });
    }
    render() {
        return (
            <div className="pageContainer">
                <Table className="btnstl">
                    <Button className="topView" color="primary" onClick={this.TopView}>TopView</Button>
                    <Button className="hotView" color="primary" onClick={this.HotView}>HotView</Button>
                </Table>
                <div className="switchContainer">
                    {this.state.topView && (
                        <div>
                            <TopView />
                        </div>
                    )}
                    {this.state.hotView && (
                        <div>
                            <HotView />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Page;