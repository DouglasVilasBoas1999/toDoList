import styles from  './CreateTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState, type FormEvent } from 'react'

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
        const newTaskText = formData.get('task') as string;
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }


    return(
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <textarea
                name= 'task'
                placeholder='Adicione uma nova tarefa'
                onInput={autoResize}
                value= {newTaskText}
            />
            <button type='submit'>   
            Criar                 
            < PlusCircle size={20}/>
            </button>
        </form> 
    )
}