import React from 'react'
import { useHistory } from 'react-router-dom'

export const GoBack = () => {
    const history = useHistory();
    const onClick = () => {
        history.goBack();
    }
    return (
        <button onClick={onClick} className="btn btn-link">
            <i className="fas fa-arrow-left"></i>
        </button>
    )
}
