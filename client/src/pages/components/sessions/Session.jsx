import React, { useState } from 'react';
import EditSessionForm from './EditSessionForm.jsx';
import DeleteSessionBox from './DeleteSessionBox.jsx';

function Session(props){
    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);

    function handleEdit(){
        setEditMode(prevValue=>{
            return !prevValue;
        });
    }
    function handleDelete(){
        setDeleteMode(prevValue=>{
            return !prevValue;
        });
    }

    return <div id={props.id} className="session-info">
                {editMode ? <EditSessionForm 
                            id={props.id}
                            date={props.date} 
                            session={props.session} 
                            times={props.times} 
                            comments={props.comments}
                            callReRender={props.callReRender}
                            handleEdit={handleEdit} 
                            />
                :
                <>
                    <div className="session-item">
                    {props.date}
                    </div>
                    <div className="session-item">
                    {props.session}
                    </div>
                    <div className="session-item">
                    {props.times}
                    </div>
                    <div className="session-item">
                    {props.comments}
                    </div>
                    <div className="edit-delete-buttons">
                    <button onClick={handleEdit} className='edit'>Edit</button>
                    <button onClick={handleDelete} className='delete'>Delete</button>
                    </div>
                </>
                }
                {deleteMode && <DeleteSessionBox 
                                handleDelete={handleDelete} 
                                callReRender={props.callReRender} 
                                id={props.id} />}
              
        </div> 
    
}

export default Session;