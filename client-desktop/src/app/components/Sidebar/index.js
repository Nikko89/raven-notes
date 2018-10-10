import React, { Component } from 'react';
import { SidebarContainer, H3, SName, USection, GSection, Sect } from './styles';

import { Query } from 'react-apollo';
import { GET_NOTES_FROM_SERVER, GET_GROUP_NOTES } from '../../graphql/queries';


class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <H3><span role='img' aria-label='monkey'>🐒</span> User Name</H3>
        <USection>
          <SName>PRIVATE</SName>

          <Query query={GET_NOTES_FROM_SERVER}>
            {({loading, error, data, client}) => {
              return(
                <Sect onClick={() => client.writeQuery({ query: GET_GROUP_NOTES, data,})}>
                  <span role='img' aria-label='monkey'>🌼</span>
                  All Notes
                </Sect>
              )
            }}
          </Query>

          <Sect><span role='img' aria-label='monkey'>🌼</span> Extracts</Sect>
        </USection>
        <GSection>
        <SName>WORKSPACE</SName>
        {/* Testing time */}
        <Query query={GET_GROUP_NOTES}>
        {({loading, error, data, client}) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>There's an error.</p>
          return (
          <Sect onClick={() => client.writeQuery({ query: GET_GROUP_NOTES, data,})}><span role='img' aria-label='monkey'>🌞</span>Codeworks</Sect>
          )
        }}
        </Query>
        {/* No more testing */}
        <Sect><span role='img' aria-label='monkey'>🌞</span>Sassy Designers</Sect>
        <Sect><span role='img' aria-label='monkey'>🌞</span>ReactJS</Sect>
        </GSection>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
