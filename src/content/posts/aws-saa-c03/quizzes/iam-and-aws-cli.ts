export const iamAndAwsCliQuiz = {
  title: 'IAM Roles & Access',
  description: 'Quick check on key IAM concepts covered here.',
  questions: [
    {
      id: 'iam-role-definition',
      type: 'multiple-choice',
      prompt: 'What is a proper definition of an IAM Role?',
      options: [
        { id: 'groups', label: 'IAM Users in multiple User Groups' },
        {
          id: 'password-policy',
          label: 'An IAM entity that defines a password policy for IAM Users'
        },
        {
          id: 'service-role',
          label:
            'An IAM entity that defines a set of permissions for making requests to AWS services, and will be used by an AWS service',
          correct: true
        },
        {
          id: 'user-permissions',
          label: 'Permissions assigned to IAM Users to perform actions'
        }
      ],
      explanation:
        'Some AWS services need to perform actions on your behalf. To do so, you assign permissions to AWS services with IAM Roles.'
    },
    {
      id: 'iam-security-tool',
      type: 'multiple-choice',
      prompt: 'Which of the following is an IAM Security Tool?',
      options: [
        {
          id: 'credentials-report',
          label: 'IAM Credentials Report',
          correct: true
        },
        { id: 'root-manager', label: 'IAM Root Account Manager' },
        { id: 'services-report', label: 'IAM Services Report' },
        { id: 'security-advisor', label: 'IAM Security Advisor' }
      ],
      explanation:
        "IAM Credentials report lists all your AWS Account's IAM Users and the status of their various credentials."
    },
    {
      id: 'iam-user-incorrect',
      type: 'multiple-choice',
      prompt: 'Which answer is INCORRECT regarding IAM Users?',
      options: [
        { id: 'multi-groups', label: 'IAM Users can belong to multiple User Groups' },
        { id: 'no-group', label: "IAM Users don't have to belong to a User Group" },
        { id: 'direct-policy', label: 'IAM Policies can be attached directly to IAM Users' },
        {
          id: 'root-credentials',
          label: 'IAM Users access AWS services using root account credentials',
          correct: true
        }
      ],
      explanation:
        'IAM Users access AWS services using their own credentials (username & password or Access Keys).'
    },
    {
      id: 'iam-best-practice',
      type: 'multiple-choice',
      prompt: 'Which of the following is an IAM best practice?',
      options: [
        { id: 'extra-users', label: 'Create several IAM Users for one physical person' },
        {
          id: 'dont-use-root',
          label: "Don't use the root user account",
          correct: true
        },
        {
          id: 'share-creds',
          label:
            'Share your AWS account credentials with your colleague, so (s)he can perform a task for you'
        },
        { id: 'no-mfa', label: 'Do not enable MFA for easier access' }
      ],
      explanation:
        'Use the root account only to create your first IAM User and a few account/service management tasks. For everyday tasks, use an IAM User.'
    }
  ]
}
