import styles from './RegisteredTask.module.css'
import { ClipboardText } from 'phosphor-react'

export function RegisteredTask(){

    return(
        <article className={styles.RegisteredTask}> 
        <header > 
            <div className={styles.TaskCreates}>
                <text> Tarefas criadas <span className={styles.qtdeBottom}> 0 de 10  </span> </text>
            </div>
            <div className={styles.TaskCompleted}>
                <text> Concluídas  <span className={styles.qtdeBottom}> 0 </span> </text>
            </div>
        </header>
            
            <div className={styles.TaskEmpty}>
                <ClipboardText size={56}  weight="thin"/>
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <text>Você ainda não tem tarefas cadastradas </text>
            </div>
      

        </article>

)

}