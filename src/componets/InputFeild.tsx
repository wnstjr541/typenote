import React , {useRef} from 'react';
import './InputFeild.css'

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ( {todo, setTodo , handleAdd} : Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e); 
            inputRef.current?.blur()
        }}>
            <input type="input" 
            value={todo}
            ref= {inputRef}
            onChange={
                (e) => setTodo(e.target.value)
            }
            placeholder='검색어를 입력하세요' className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    );
};

export default InputFeild;