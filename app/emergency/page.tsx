import { promises as fs } from "fs";
import Image from "next/image";

type Prop = {
	title: string;
	tel: string;
	email1?: [];
	email2?: [];
	website?: string;
	descr: string;
	img: string;
};
export default async function Page() {
	const emergencyCalls = await fs.readFile(
		process.cwd() + "/public/assets/emergency/emergency.json",
		"utf8"
	);
	const emergencyInfo = JSON.parse(emergencyCalls);

	const handleMobile = (strTel: string) => {
		const arrTel = strTel.split("");
		const numberTel: string[] = [];

		arrTel.forEach((item) => {
			if (item !== "-" && item !== " ") {
				numberTel.push(item);
			}
		});

		return numberTel.join("");
	};

	/**
	 *26 / 11 / 23
	 * TODO: Email display - Must be improved !!!
	 * TODO: Fix link - website
	 */

	return (
		<div>
			<div className="px-1 mb-4 md:px-20 md:mb-14">
				<h1 className="text-xl mb-4 md:text-3xl text-slate-900">
					☎️ При разговоре по телефону будьте готовы ответить на эти вопросы.
					Подготовьте памятку на немецком языке и носите её с собой (5-W Fragen)
				</h1>
				<ul className="mb-4">
					<li className="text-xl flex mb-3">
						<span className="font-extrabold text-xl text-red-500 mr-2 md:text-2xl">
							Wo:{" "}
						</span>
						<p className="text-lg text-slate-900 md:text-2xl">
							Где произошла чрезвычайная ситуация?
						</p>
					</li>
					<li className="text-xl flex mb-3">
						<span className="font-extrabold text-xl text-red-500 mr-2 md:text-2xl">
							Wer:{" "}
						</span>
						<p className="text-lg text-slate-900 md:text-2xl">Кто звонит?</p>
					</li>
					<li className="text-xl flex mb-3">
						<span className="font-extrabold text-xl text-red-500 mr-2 md:text-2xl">
							Was:
						</span>{" "}
						<p className="text-lg text-slate-900 md:text-2xl">
							Что именно произошло?
						</p>
					</li>
					<li className="text-xl flex mb-3">
						<span className="font-extrabold text-xl text-red-500 mr-2 md:text-2xl">
							Wie viele:
						</span>{" "}
						<p className="text-lg text-slate-900 md:text-2xl">
							Сколько пострадавших?
						</p>
					</li>
					<li className="text-xl flex mb-3">
						<span className="font-extrabold text-xl text-red-500 mr-2 md:text-2xl">
							Warten:
						</span>{" "}
						<p className="text-lg text-slate-900 md:text-2xl">
							Ожидайте уточняющих вопросов
						</p>
					</li>
				</ul>
				<h1 className="text-lg italic text-slate-900">
					5 W-Fragen - это то, чему учат детей в школах и на разных курсах
					первой помощи
				</h1>
			</div>

			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
				{emergencyInfo.map((info: Prop) => {
					return (
						<li
							key={info.title}
							className="p-2 text-slate-950 sm:p-4 border border-gray-300 rounded-lg transition shadow hover:border-gray-600"
						>
							<Image
								src={`/img/${info.img}`}
								width={128}
								height={128}
								alt={`${info.descr}`}
								className="mb-6"
							/>

							<h1 className="text-2xl text-slate-900 font-semibold mb-2">
								{info.title}
							</h1>

							{info.tel ? (
								<a
									href={`tel:${handleMobile(info.tel)}`}
									className="block text-3xl sm:text-4xl mb-10 font-semibold text-red-500 underline  decoration-sky-500  hover:decoration-wavy"
								>
									Набрать: {info.tel}
								</a>
							) : null}
							{info.email1 ? (
								<>
									<a
										href={`mailto:${info.email1}`}
										target="_blank"
										className="block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-4"
									>
										{info.email1}
									</a>
									<a
										href={`mailto:${info.email2}`}
										target="_blank"
										className="block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-10 break-words ..."
									>
										{info.email2}
									</a>
								</>
							) : null}

							{info.website ? (
								<a
									href={`${info.website}`}
									target="_blank"
									className="block text-2xl text-sky-600 font-medium underline decoration-indigo-500 hover:decoration-wavy mb-10 break-words ..."
								>
									{info.website}
								</a>
							) : null}

							<p className="text-2xl text-slate-900">{info.descr}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
