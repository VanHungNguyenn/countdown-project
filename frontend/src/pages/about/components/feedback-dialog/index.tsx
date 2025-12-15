import useGlobalModal from '@/components/global-modal/use-global-modal'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'

const FeedbackDialog = () => {
	const { closeGlobalModal } = useGlobalModal()

	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			type: 'suggestion',
			content: '',
		},
	})

	const onSubmit = (values: unknown) => {
		console.log('Feedback submitted:', values)
		closeGlobalModal()
	}

	return (
		<Dialog defaultOpen>
			<DialogContent
				className='max-w-[500px] p-0 overflow-hidden'
				aria-describedby={undefined}
			>
				{/* Header */}
				<DialogHeader className='px-6 py-5 border-b'>
					<DialogTitle className='text-xl font-bold'>
						Submit Your Feedback
					</DialogTitle>
				</DialogHeader>

				{/* Form */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col max-h-[80vh]'
					>
						<div className='p-6 space-y-5 overflow-y-auto'>
							{/* Name */}
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder='Your name'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							{/* Email */}
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type='email'
												placeholder='example@email.com'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>

							{/* Feedback Type */}
							<FormField
								control={form.control}
								name='type'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Feedback Type</FormLabel>
										<Select
											value={field.value}
											onValueChange={field.onChange}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value='suggestion'>
													Suggestion
												</SelectItem>
												<SelectItem value='bug'>
													Bug Report
												</SelectItem>
												<SelectItem value='feature'>
													Feature Request
												</SelectItem>
												<SelectItem value='other'>
													Other
												</SelectItem>
											</SelectContent>
										</Select>
									</FormItem>
								)}
							/>

							{/* Content */}
							<FormField
								control={form.control}
								name='content'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Feedback Content</FormLabel>
										<FormControl>
											<Textarea
												rows={4}
												placeholder='Tell us what you think...'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						{/* Footer */}
						<div className='px-6 py-4 bg-muted/50 flex justify-end gap-3 border-t'>
							<Button
								type='button'
								variant='outline'
								// onClick={}
							>
								Cancel
							</Button>
							<Button type='submit'>Submit</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default FeedbackDialog
