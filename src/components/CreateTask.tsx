import styles from  './CreateTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState, type FormEvent, type ChangeEvent, type InvalidEvent } from 'react'

export interface TaskProps {
    task: string;
}   

export function CreateTask({task}: TaskProps){
   const [tasks, setTasks] = useState(['Teste'])
   const [newTaskText, setNewTaskText] =  useState('')
   
    function autoResize(e: React.FormEvent<HTMLTextAreaElement>) {
        const el = e.currentTarget;
        el.style.height = "auto";
        if (el.value.trim() === "") {
            el.style.height = "3.375rem"; 
            return;
        }
        el.style.height = `${el.scrollHeight}px`;
    }
    
     function handleCreateNewTask(event:FormEvent<HTMLFormElement>){
            event.preventDefault()
            const formData = new FormData(event.currentTarget);
            const newCommentText = formData.get('comment') as string;
            setTasks([...tasks, newCommentText]);
            setNewTaskText('');
        }



    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
            
            event.target.setCustomValidity('Esse campo é obrigátorio')
        }
    
    function handleNewTaskChange(event:FormEvent<HTMLFormElement>){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }


    return(
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <textarea
                name= 'task'
                placeholder='Adicione uma nova tarefa'
                onInput={autoResize}
                value= {newTaskText}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type='submit'>   
            Criar                 
            < PlusCircle size={20}/>
            </button>
        </form> 
    )
}