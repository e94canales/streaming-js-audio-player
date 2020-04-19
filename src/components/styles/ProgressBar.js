import styled from 'styled-components';

const ProgressBarContainer = styled.div `
    margin: auto;
    /* padding: 2%; */
    
        .player {
            background-color: #d6d6d6;
            
            .progress {
                width: 0%;
                max-width: 100%;
                height: .3vh;
                background-color: #c90d0d;
                transition: width 0.4s ease;
            }
        }
        .infoControls{
            padding: 5%;
            .control {
            color: white;
            padding: 0 1%;
            
                &:hover {
                    color: red;
                    cursor: pointer;
                }
            }
            .position{
                position: absolute;
                color: white;
                float: left;
            }

        }

`
export default ProgressBarContainer