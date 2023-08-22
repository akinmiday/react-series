/* eslint-disable react/prop-types */


const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <>
            {items.length ? (

            ): (
                    <p style = {{ marginTop: '2rem' }} >Your List is empty</p >
            )}
        </>
    )
}

export default Content