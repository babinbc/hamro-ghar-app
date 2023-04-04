
import OrderList from './OrderList';
import useFetch from './useFetch';
import FilterOptions from './FilterOptions';

const Home = () =>{

    const {data: orders, isPending, error} = useFetch('https://test-api-5zla.onrender.com/orders');
    
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>All Orders</h1>
            <FilterOptions filterValue="none"/>
            {orders && <OrderList orders={orders} />}
        </div>
    );
}

export default Home;