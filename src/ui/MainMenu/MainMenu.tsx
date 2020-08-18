import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import StorageIcon from '@material-ui/icons/Storage';

interface IProps {

}

interface IState {
    value: number;
}

export default class MainMenu extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
      return (
          <div className="BottomMenu">
              <BottomNavigation
                  value={this.state.value}
                  onChange={(event, newValue) => {
                      this.setState({ value: newValue});
                  }}
                  showLabels
                  className="root"
              >
                  <BottomNavigationAction label="Main" icon={<DashboardIcon />} />
                  <BottomNavigationAction label="Timer" icon={<HistoryIcon />} />
                  <BottomNavigationAction label="Menu" icon={<StorageIcon />} />
              </BottomNavigation>
          </div>
      );
    }
}
