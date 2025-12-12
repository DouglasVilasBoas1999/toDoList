import styles from  './CreateTask.module.css'
import { PlusCircle } from 'phosphor-react'


export function CreateTask(){
function autoResize(e: React.FormEvent<HTMLTextAreaElement>) {
  const el = e.currentTarget;
  const BASE = 54;
  el.style.height = `${BASE}px`;

  if (el.value.trim() !== "") {
    el.style.height = `${el.scrollHeight}px`;
  }
}
    return(
    <div className={styles.taskCreatedAndRegistered}>
        <form className={styles.task}>
            <textarea
                name= 'task'
                placeholder='Adicione uma nova tarefa'
                onInput={autoResize}
                rows={1}
          
            />
            <button type='submit'>   
            Criar                 
            < PlusCircle size={20}/>
            </button>
        </form> 

        <header className={styles.registeredTask } > 
            <div className={styles.taskCreates}>
                <p> Tarefas criadas <span className={styles.qtdeBottom}> 0  </span> </p>
            </div>
            <div className={styles.taskCompleted}>
                <p> Concluídas  <span className={styles.qtdeBottom}> 0 de 10  </span> </p>
            </div>
        </header>
    </div>
    )
}