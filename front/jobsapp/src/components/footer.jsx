export default function Footer(props) {
    return (
        <div className='footer-class d-flex justify-content-center align-items-end'>
            <h4 className='display-7'> Footer <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {new Date().getFullYear()} </h4>
        </div>
    )
}