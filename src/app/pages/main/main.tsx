import { flights } from '../../../../data/data'
import Layout from '../../layouts/mainLayout/mainLayout'
import Card from '../../components/card/card'
import Form from '../../components/form/form'
import CardLayout from '../../layouts/cardLayout/cardLayout'
import ContentLayout from '../../layouts/contentLayout/contentLayout'
import Nav from '../../layouts/nav/nav'
import Sidebar from '../../layouts/sidebar/sidebar'

const Main = () => {
	return (
		<Layout>
			<Sidebar />
			<ContentLayout>
				<Nav>
					<Form />
				</Nav>
				<CardLayout>
					{flights.map((flight, idx) => (
						<Card
							key={flight.id}
							id={flight.id}
							img={flight.img}
							filesQty={flight.filesQty}
							fileType={flight.fileType}
							addDate={flight.addDate}
							tags={flight.tags}
							idx={idx + 1}
						/>
					))}
				</CardLayout>
			</ContentLayout>
		</Layout>
	)
}

export default Main
