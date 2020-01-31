const colorShades = [
  "gray.50","gray.100","gray.200","gray.300","gray.400",
  "gray.500","gray.600","gray.700","gray.800","gray.900",
  "red.50","red.100","red.200","red.300","red.400",
  "red.500","red.600","red.700","red.800","red.900",
  "orange.50","orange.100","orange.200","orange.300","orange.400",
  "orange.500","orange.600","orange.700","orange.800","orange.900",
  "yellow.50","yellow.100","yellow.200","yellow.300","yellow.400",
  "yellow.500","yellow.600","yellow.700","yellow.800","yellow.900",
  "green.50","green.100","green.200","green.300","green.400",
  "green.500","green.600","green.700","green.800","green.900",
  "teal.50","teal.100","teal.200","teal.300","teal.400",
  "teal.500","teal.600","teal.700","teal.800","teal.900",
  "blue.50","blue.100","blue.200","blue.300","blue.400",
  "blue.500","blue.600","blue.700","blue.800","blue.900",
  "cyan.50","cyan.100","cyan.200","cyan.300","cyan.400",
  "cyan.500","cyan.600","cyan.700","cyan.800","cyan.900",
  "purple.50","purple.100","purple.200","purple.300","purple.400",
  "purple.500","purple.600","purple.700","purple.800","purple.900",
  "pink.50","pink.100","pink.200","pink.300","pink.400","pink.500",
  "pink.600","pink.700","pink.800","pink.900","black","white"
] as const

type SuitTuple = typeof colorShades[number]