import styles from  './CreateTask.module.css'
import { PlusCircle } from 'phosphor-react'
import {  } from 'react'

   
export function CreateTask(){
   
    function autoResize(e) {
    e.target.style.height = "auto";             // reseta
    e.target.style.height = e.target.scrollHeight + "px";  // ajusta ao conteúdo
}
   
   
    return(
        <form className={styles.task}>
            <textarea
              onInput={autoResize}
                placeholder='Adicione uma nova tarefa'
                
            />
            <a href='#'>   
            Criar                 
            < PlusCircle size={20}/>
            </a>
        </form> 
    )
}