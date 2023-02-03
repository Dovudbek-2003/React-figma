function Statistik(){
    const massiv = [
        {number: '9999+', title:'Всего смет создано'},
        {number: '220', title:'ко-во клиентов'},
        {number: '390', title:'какашки единорога'},
        {number: '834+', title:'слезы младенцов'},
    ]
    return(
        <>
        <section className="main-stat">
            <div className="stat container">
                {massiv.map((item, index)=>{
                    return(
                        <div key={index}>
                        <h1 className="number">{item.number}</h1>
                        <h3 className="title">{item.title}</h3>
                    </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}
export default Statistik;