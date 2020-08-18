import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
                  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
          </div>
      );
    }
}
