import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
`

export const MusicTrackImage = styled.img`
  height: 92px;
  width: 144px;
  margin-right: 21px;
`

export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 17px;
  font-weight: 550;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 550;
  line-height: 28px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Duration = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 21px;
  font-weight: bold;
  margin-right: 52px;
`
export const DeleteButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
  background-color: transparent;
`
