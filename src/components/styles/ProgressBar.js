import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
    background-color: black;
    
        .player {
            width: 100%;
            background-color: black;
            
            .progress {
                width: 0%;
                height: 1vh;
                background-color: red;
            }
        }
        .play {
            padding: 0 0;
            color: white;
            
            &:hover {
                color: red;
                cursor: pointer;
            }
        }
        .pause {
            padding: 0 0;
            color: white;
            
            &:hover {
                color: red;
                cursor: pointer;
            }
        }
        .position{
            color: white;
        }

`
export default ProgressBarContainer