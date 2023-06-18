function InputComponent(props) {
    return (
        <div className="m-0.5">
            <div className="bg-white w-[258px] rounded-[5px]">
                <h1 className="m-1">
                    { props.item.title }
                </h1>
            </div>
        </div>
    );
}

export default InputComponent;