let x = parseInt(window.localStorage.getItem('idMax') || '0')
export const CreateId = (): number => {
	x += 1
	window.localStorage.setItem('idMax', JSON.stringify(x))
	return x
}