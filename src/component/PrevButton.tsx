import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FlickItemLayer from './FlickItemLayer';
import { ReactComponent as HomeIcon } from '../icons/HomeIcon.svg';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const Rect = styled.div`
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 27%;
  border: 2px solid #0d6efd;
`

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`

function PrevButton() {
  const nav = useNavigate()

  return (
    <Container onClick={ () => { nav('/') } }>
      <FlickItemLayer
        elementItem={
          <Rect>
            <Button>
              <HomeIcon style={{ width: "25px", height: "25px" }} />
            </Button>
          </Rect>
        }
      />
    </Container>
  )
}

export default PrevButton