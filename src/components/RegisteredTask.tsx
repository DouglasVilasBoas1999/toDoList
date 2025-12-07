import styles from './RegisteredTask.module.css'
import { ClipboardText, Trash, Circle, Check  } from 'phosphor-react'

export function RegisteredTask(){

    return(
        <article className={styles.registeredTask}> 
        <header > 
            <div className={styles.taskCreates}>
                <p> Tarefas criadas <span className={styles.qtdeBottom}> 0  </span> </p>
            </div>
            <div className={styles.TaskCompleted}>
                <p> Concluídas  <span className={styles.qtdeBottom}> 0 de 10  </span> </p>
            </div>
        </header>
            <div className={styles.taskEmpty}>
            <div className={styles.lineDivisor}/>
            <div className={styles.emptyContent}>
                <ClipboardText size={56}  weight="thin"/>
                <strong>Você ainda não tem tarefas cadastradas </strong>
                <p>Você ainda não tem tarefas cadastradas </p>
            </div> 
            </div>
        <div className={styles.taskContent}>
           
           <button className={styles.statusTask} title='Checkin de tarefas'>
            <Circle size={24}  weight="bold"/>
            </button>
            <button className={styles.completedTask} title='Checkin foi finalizado da tarefa'>
            <Check size={16} weight='bold' />
            </button>
            
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            </p>
            <button className={styles.deleteTask} 
            title='Deletar Comentário'>
                <Trash size={24} />
            </button>
        </div>
      
        </article>

)

}