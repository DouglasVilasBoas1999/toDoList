import styles from './RegisteredTask.module.css'
import { ClipboardText } from 'phosphor-react'

export function RegisteredTask(){

    return(
        <article className={styles.RegisteredTask}> 
        <header > 
            <div className={styles.TaskCreates}>
                <p> Tarefas criadas <span className={styles.qtdeBottom}> 0  </span> </p>
            </div>
            <div className={styles.TaskCompleted}>
                <p> Concluídas  <span className={styles.qtdeBottom}> 0 de 10  </span> </p>
            </div>
        </header>
        <hr/>
            <div className={styles.TaskEmpty}>
                <ClipboardText size={56}  weight="thin"/>
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <p>Você ainda não tem tarefas cadastradas </p>
            </div>
      
        </article>

)

}