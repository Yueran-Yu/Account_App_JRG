type CollectedData = {
	tagsId: number[]
	note: string
	date: Date
	category: '+' | '-'
	amount: number
}

type ContextType ={
	collectedData: CollectedData[]
	addCollectedData: (properties: CollectedData)=> boolean
}