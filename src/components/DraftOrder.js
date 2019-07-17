import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

function generateOrder(element) {
    const order = [
        'Peyton Price',
        'Clay Austell',
        'Josh Short',
        'Connor Ferrentino',
        'Kyle Felpel',
        'Kevin Shannon',
        'Justin Ahalt',
        'Eric Sivill',
        'Conner Thompson',
        'Nate Karr',
        'Jeff Edmonson',
        'Payton Ballard',
        'Zac Linberg',
        'Josh McCullan'
      ];
    return order.map((name, index) =>
      <ListItem button>
          <ListItemText
            primary={`${index + 1}. ${name}`}/>
      </ListItem>
    );
  }

export class DraftOrder extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List >
                        {generateOrder()}
                    </List>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default DraftOrder;