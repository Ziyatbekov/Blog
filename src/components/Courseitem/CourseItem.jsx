import React from 'react';

const CourseItem = (props) => {
    return (
        <div className="course-item">
            <p> Название:{props.name} </p>
            <p> Продолжительность {props.duration}м.</p>
            <p> Статус: {props.status ? 'Важный': 'Неважный' } </p>

            <button onClick={props.changeImportance}> Сделать {props.status ? 'неважным' : 'важным' } </button>
            <button onClick={props.deletePost}>Удалить пост</button>
        </div>
    );
};

export default CourseItem;