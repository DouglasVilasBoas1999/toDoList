import styles from  './CreateTask.module.css'
import { PlusCircle } from 'phosphor-react'
import {  } from 'react'

   
export function CreateTask(){
    return(
        <form className={styles.task}>
            <textarea
                placeholder='Adicione uma nova tarefa'
            />
            <a href='#'>   
            Criar                 
            < PlusCircle size={20}/>
            </a>
        </form> 
    )
}