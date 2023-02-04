import * as React from 'react';
import ViewCarComponent from '../components';
import ViewCarDetailComponent from '../service/index.service';

class ViewCarDetailScreen extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <ViewCarDetailComponent {...this.props}>
                {
                    props => (
                        <ViewCarComponent
                            {...props}
                        />
                    )
                }
            </ViewCarDetailComponent>
        );
    };
};

export default ViewCarDetailScreen;