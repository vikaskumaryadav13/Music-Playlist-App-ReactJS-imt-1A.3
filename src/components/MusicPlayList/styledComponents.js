import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
  height: 452px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 41px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 31px;
  font-weight: 450;
`

export const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 51px;
  margin-right: 51px;
`

export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 31px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 32px;
  width: 17%;
  padding-left: 14px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 51px;
  margin-right: 51px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 31px;
  font-weight: bold;
`
