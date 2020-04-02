import * as React from 'react';

export interface TaskItem {
    task: string;
    completed: boolean;
}
export interface TodoListState {
    currentTask: string;
    currentTasks: TaskItem[];
}

export default class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: {}){
        super(props);
        this.state = {
            currentTask:'',
            currentTasks:[]
        }
    }
    render() {
        const {currentTasks} = this.state;
        const notCompleted = currentTasks.filter(c => c.completed === false).length | 0;
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <input value={this.state.currentTask} onChange={this.updateInput} />
                    <button onClick={this.handleAdd}>Add</button>
                   
                    <div>{notCompleted} remaining out of {currentTasks.length} tasks</div>
                    {this.tasks()}
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                    .list {
                        display: inline-block;
                        list-style-type: disc;
                        padding-inline-start: 0;
                        margin-inline-start: 50px;
                    }
                `}</style>
            </>
        );
    }

    tasks = () => {
        const {currentTasks} = this.state;

        if (currentTasks.length === 0){
            return null;
        }

        return (
            <ul className={'list'}>
                {currentTasks.map((c, i) => {
                    return <li key={i} className={c.completed ? 'is-done': undefined} onClick={() => this.changeStatus(c)}
                    >{c.task}</li>
                })}
            </ul>
        );
    }

    changeStatus = (t: TaskItem) => {
        let {currentTasks} = this.state;
        const newTasks = currentTasks.map(c => {
            c.completed = c.task === t.task ? !c.completed : c.completed;
            return c;
        });
        this.setState({currentTasks:newTasks});
        // let selectTasks = currentTasks.filter(c => c.task !== t.task);
        // this.setState({currentTasks: [...selectTasks, { task: t.task, completed: !t.completed}]});
    }

    handleAdd = () => {
        this.setState({currentTasks: [...this.state.currentTasks, { task: this.state.currentTask, completed: false}]});
    }

    updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
       this.setState({currentTask: event.target.value});
   }
}