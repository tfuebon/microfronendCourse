import styled from '@emotion/styled'

const ButtonStyle = styled.button`
    font-family: 'Finlandica', sans-serif;
    cursor: pointer;
    font-size: 1.3rem;
    margin: 0px 0.5rem;
`
export const Button = ({ text, onClick }) => {
    return (
        <ButtonStyle onClick={onClick}>
            {text}
        </ButtonStyle>
    )
}