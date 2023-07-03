export default function Footer(){

    const fullYear = new Date().getFullYear()

    return(

        <footer>
            <p>&copy; {fullYear} </p>
            <p><a href="https://github.com/Samuel-H-Dev" target="_blank" rel="norefferer">Github</a></p>
        </footer>
    )
}