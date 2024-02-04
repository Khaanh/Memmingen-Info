import Image from "next/image";
import airport from "../../public/img/airport.png";
import train from "../../public/img/train.png";

const Transport = () => {
	return (
		<div>
			<h1 className="text-center text-slate-900  text-4xl font-bold mb-4">
				Как добраться:
			</h1>

			<ul className="flex justify-center">
				<li>
					Aeroport Train
					<Image src={airport} alt="airport" width={65} height={65} />
					<Image src={train} alt="airport" width={65} height={65} />
				</li>
				<li>Aeroport Train</li>
			</ul>
		</div>
	);
};

export default Transport;
